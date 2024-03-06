document.addEventListener('DOMContentLoaded', function () {
    const result = document.getElementById('result');
    const clipboard = document.getElementById('clipboard');
    const length = document.getElementById('length');
    const uppercase = document.getElementById('uppercase');
    const lowercase = document.getElementById('lowercase');
    const numbers = document.getElementById('numbers');
    const symbols = document.getElementById('symbols');
    const generate = document.getElementById('generate');

    const generatePassword = () => {
        const upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const lowerLetters = 'abcdefghijklmnopqrstuvwxyz';
        const nums = '0123456789';
        const syms = '!@#$%^&*(){}_+=<>?';

        let chars = '';
        if (uppercase.checked) chars += upperLetters;
        if (lowercase.checked) chars += lowerLetters;
        if (numbers.checked) chars += nums;
        if (symbols.checked) chars += syms;

        let password = '';
        for (let i = 0; i < length.value; i++) {
            const randomIndex = Math.floor(Math.random() * chars.length);
            password += chars[randomIndex];
        }
        return password;
    };

    generate.addEventListener('click', () => {
        result.textContent = generatePassword();
    });

    clipboard.addEventListener('click', () => {
        const textarea = document.createElement('textarea');
        const password = result.textContent;

        if (!password) return;

        textarea.value = password;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        textarea.remove();
        alert('Password is copied to clipboard!');
    });
});
