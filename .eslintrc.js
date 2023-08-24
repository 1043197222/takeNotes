module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 7,
        sourceType: "module",
    },
    rules: {
        // 禁止使用 JavaScript 关键字作为变量名
        'no-shadow-restricted-names': 'error',
        // 优先使用 const，不使用 var 和 let
        'prefer-const': [
            'error',
            {
                destructuring: 'any',
                ignoreReadBeforeAssign: true,
            },
        ],
        // 推荐使用箭头函数替代 function
        'prefer-arrow-callback': [
            'error',
            {
                allowNamedFunctions: false,
                allowUnboundThis: true,
            },
        ],
        // 必须使用 === 或 !==，禁止使用 == 和 !=
        eqeqeq: ['error', 'always'],
        // 禁止使用 console
        'no-console': [1, {allow: ['error', 'warn']}],
        // 禁止使用 debugger
        // 'no-debugger': '3',
        // 禁止重复的函数声明
        'no-dupe-args': 'error',
        // 禁止在 switch 中的某个 case 语句中出现重复的测试表达式
        'no-duplicate-case': 'error',
        // 禁止使用 eval
        'no-eval': 'error',
    },
};
