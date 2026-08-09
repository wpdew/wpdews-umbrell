(function() {
    'use strict';

    const snippetName = document.getElementById('snippetName');
    const snippetCode = document.getElementById('snippetCode');
    const snippetDescription = document.getElementById('snippetDescription');
    const outputCode = document.getElementById('outputCode');
    const statusLine = document.getElementById('statusLine');

    const modeSingle = document.getElementById('modeSingle');
    const modeFull = document.getElementById('modeFull');

    const generateBtn = document.getElementById('generateBtn');
    const clearBtn = document.getElementById('clearBtn');
    const copyBtn = document.getElementById('copyBtn');
    const downloadBtn = document.getElementById('downloadBtn');

    function setStatus(message, type) {
        statusLine.textContent = message || '';
        statusLine.classList.remove('success', 'error');
        if (type) {
            statusLine.classList.add(type);
        }
    }

    function escapeForSnippetsJson(str) {
        return String(str)
            .replace(/\\/g, '\\\\')
            .replace(/"/g, '\\"')
            .replace(/\$/g, '\\$')
            .replace(/\n/g, '\\n')
            .replace(/\r/g, '\\r')
            .replace(/\t/g, '\\t');
    }

    function generateOutput() {
        const name = snippetName.value.trim();
        const code = snippetCode.value;
        const description = snippetDescription.value.trim() || 'Snippet without description';

        if (!name) {
            setStatus('Please enter snippet name.', 'error');
            return;
        }

        if (!code.trim()) {
            setStatus('Please enter snippet code.', 'error');
            return;
        }

        const escapedCode = escapeForSnippetsJson(code);
        const snippetData = {
            code: escapedCode,
            description: description
        };

        let result = '';
        if (modeSingle.checked) {
            result = JSON.stringify({ [name]: snippetData }, null, 2);
            result = result.slice(1, -1).trim();
        } else {
            result = JSON.stringify({ [name]: snippetData }, null, 2);
        }

        outputCode.value = result;
        setStatus('Snippet generated.', 'success');
    }

    function clearForm() {
        snippetName.value = '';
        snippetCode.value = '';
        snippetDescription.value = '';
        outputCode.value = '';
        setStatus('Form cleared.', 'success');
        snippetName.focus();
    }

    function copyOutput() {
        if (!outputCode.value.trim()) {
            setStatus('Nothing to copy. Generate snippet first.', 'error');
            return;
        }

        navigator.clipboard.writeText(outputCode.value)
            .then(() => setStatus('Copied to clipboard.', 'success'))
            .catch(() => setStatus('Copy failed. Please copy manually.', 'error'));
    }

    function downloadOutput() {
        if (!outputCode.value.trim()) {
            setStatus('Nothing to download. Generate snippet first.', 'error');
            return;
        }

        let content = outputCode.value;
        if (modeSingle.checked) {
            content = '{\n' + outputCode.value + '\n}';
        }

        const blob = new Blob([content], { type: 'application/json;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'snippets.json';
        document.body.appendChild(link);
        link.click();
        link.remove();
        URL.revokeObjectURL(url);
        setStatus('snippets.json downloaded.', 'success');
    }

    function loadExample(type) {
        const examples = {
            html: {
                name: 'HTML5 Template',
                code: [
                    '<!DOCTYPE html>',
                    '<html lang="uk">',
                    '<head>',
                    '    <meta charset="UTF-8">',
                    '    <meta name="viewport" content="width=device-width, initial-scale=1.0">',
                    '    <title>${1:Document}</title>',
                    '</head>',
                    '<body>',
                    '    ${2:content}',
                    '</body>',
                    '</html>'
                ].join('\n'),
                description: 'Basic HTML5 template with placeholders'
            },
            php: {
                name: 'PHP Class',
                code: [
                    '<?php',
                    '',
                    'namespace App\\${1:Models};',
                    '',
                    'class ${2:ClassName}',
                    '{',
                    '    public function __construct()',
                    '    {',
                    '        ${0:// constructor}',
                    '    }',
                    '}'
                ].join('\n'),
                description: 'PHP class with namespace'
            },
            react: {
                name: 'React Functional Component',
                code: [
                    "import React from 'react';",
                    '',
                    'const ${1:ComponentName} = () => {',
                    '    return (',
                    '        <div className="${2:container}">',
                    '            ${3:content}',
                    '        </div>',
                    '    );',
                    '};',
                    '',
                    'export default ${1:ComponentName};'
                ].join('\n'),
                description: 'React functional component'
            },
            vue: {
                name: 'Vue Component',
                code: [
                    '<template>',
                    '  <div class="${1:component-name}">',
                    '    ${2:content}',
                    '  </div>',
                    '</template>',
                    '',
                    '__VUE_SCRIPT_OPEN__',
                    'export default {',
                    "  name: '${1:ComponentName}',",
                    '  data() {',
                    '    return {',
                    '      ${0}',
                    '    }',
                    '  }',
                    '}',
                    '__VUE_SCRIPT_CLOSE__'
                ].join('\n')
                    .replace('__VUE_SCRIPT_OPEN__', '<scr' + 'ipt>')
                    .replace('__VUE_SCRIPT_CLOSE__', '</scr' + 'ipt>'),
                description: 'Vue component snippet'
            }
        };

        const example = examples[type];
        if (!example) return;

        snippetName.value = example.name;
        snippetCode.value = example.code;
        snippetDescription.value = example.description;
        setStatus('Example loaded: ' + example.name, 'success');
    }

    generateBtn.addEventListener('click', generateOutput);
    clearBtn.addEventListener('click', clearForm);
    copyBtn.addEventListener('click', copyOutput);
    downloadBtn.addEventListener('click', downloadOutput);
    modeSingle.addEventListener('change', generateOutput);
    modeFull.addEventListener('change', generateOutput);

    document.querySelectorAll('[data-example]').forEach((button) => {
        button.addEventListener('click', function() {
            loadExample(this.getAttribute('data-example'));
        });
    });

    document.addEventListener('keydown', function(event) {
        if ((event.ctrlKey || event.metaKey) && event.key === 'Enter') {
            event.preventDefault();
            generateOutput();
        }
    });

    generateOutput();
})();
