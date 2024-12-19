document.addEventListener('DOMContentLoaded', function () {
    let trueAnswer = 0;
    let falseAnswer = 0;
    let currentQuestionIndex = 0;

    const AnswerQuestion = [
        {
            name: 'question1',
            question: 'Что такое операционная система?',
            answers: [
                'Это просто программа на компьютере, как и другие - Word или Chrome.',
                'Это показатель того, какой процессор используется на компьютере. Например, 32-битный или 64-битный.',
                'Это набор взаимосвязанных программ, осуществляющих управление компьютером и взаимодействие с пользователем.',
                'Нет такого понятия, есть понятие "файловая система".'
            ],
            correct: 'Это набор взаимосвязанных программ, осуществляющих управление компьютером и взаимодействие с пользователем.'
        },
        {
            name: 'question2',
            question: 'Является ли Android операционной системой?',
            answers: [
                'Да, это такая же ОС, как и другие, просто для мобильных девайсов.',
                'Нет, операционные системы бывают только для ПК.',
                'Нет, Android это программа, которая ставится на операционную систему девайса. ОС на разных девайсах разные.',
                'Это домашняя страничка в настройках вашего браузера.'
            ],
            correct: 'Да, это такая же ОС, как и другие, просто для мобильных девайсов.'
        },
        {
            name: 'question3',
            question: 'Что такое процессор компьютера?',
            answers: [
                'Это блок, внутри которого находится дисковод и много разъемов для монитора, клавиатуры и компьютерной мышки.',
                'Это общее название всех комплектующих компьютера.',
                'Это элемент компьютера, с помощью которого обрабатывается информация, находящаяся как в собственной памяти, так и в памяти других устройств.',
                'Это суммарный показатель вычислительной мощности компьютера, например 2,7 ГГц.'
            ],
            correct: 'Это элемент компьютера, с помощью которого обрабатывается информация, находящаяся как в собственной памяти, так и в памяти других устройств.'
        },
        {
            name: 'question4',
            question: 'Какие бывают разрядности у современных процессоров?',
            answers: [
                '32 и 64 бита',
                '12 и 32 бита',
                '15 и 32 бита',
                '86 и 64 бита'
            ],
            correct: '32 и 64 бита'
        },
        {
            name: 'question5',
            question: 'Какой тип процессора чаще всего используют мобильные девайсы?',
            answers: [
                'iOS использует Intel, остальные используют AMD.',
                'Чаще всего используют Intel.',
                'Чаще всего используют AMD.',
                'Чаще всего используют ARM.'
            ],
            correct: 'Чаще всего используют ARM.'
        },
        {
            name: 'question6',
            question: 'Для чего компьютеру нужна RAM?',
            answers: [
                'Для быстрого доступа к данным.',
                'Для долгосрочного хранения данных.',
                'Для правильной фрагментации памяти.',
                'Для дефрагментации данных.'
            ],
            correct: 'Для быстрого доступа к данным.'
        },
        {
            name: 'question7',
            question: 'Чем отличается HDD от SSD?',
            answers: [
                'HDD - это твердотельный накопитель без подвижных частей. Более дешевый, чем SSD. HDD работает быстрее.',
                'HDD - это твердотельный накопитель без подвижных частей. Более дорогой, чем SSD. HDD работает быстрее.',
                'SSD - это твердотельный накопитель без подвижных частей. Более дешевый, чем HDD. SSD работает быстрее.',
                'SSD - это твердотельный накопитель без подвижных частей. Более дорогой, чем HDD. SSD работает быстрее.'
            ],
            correct: 'SSD - это твердотельный накопитель без подвижных частей. Более дорогой, чем HDD. SSD работает быстрее.'
        },
        {
            name: 'question8',
            question: 'Как отличаются между собой USB?',
            answers: [
                'Бывают только USB 2.0 и 3.2.',
                'Бывают только micro-USB и mini-USB.',
                'USB отличаются по пропускной способности (micro-USB, mini-USB, lightning и т.д.) и форме (USB 2.0, USB 3.2).',
                'USB отличаются по форме (micro-USB, mini-USB, lightning и т.д.) и пропускной способности (USB 2.0, USB 3.2).'
            ],
            correct: 'USB отличаются по форме (micro-USB, mini-USB, lightning и т.д.) и пропускной способности (USB 2.0, USB 3.2).'
        },
        {
            name: 'question9',
            question: 'Какой файловой системы не существует?',
            answers: [
                'Fat',
                'NTFS',
                'APFS',
                'BolSFS'
            ],
            correct: 'BolSFS'
        },
    ];

    function randomQuestion(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    randomQuestion(AnswerQuestion);

    const totalQuestions = AnswerQuestion.length;
    const quizItemsContainer = document.querySelector('.quiz__items');

    AnswerQuestion.forEach(item => {
        randomQuestion(item.answers);
        const form = document.createElement('form');
        form.classList.add('quiz__item');
        if (quizItemsContainer.children.length === 0) {
            form.classList.add('visible');
        }
        form.setAttribute('data-question-name', item.name);

        const title = document.createElement('div');
        title.classList.add('quiz__item-title');
        title.innerHTML = `<h3>${item.question}</h3>`;
        const questionsDiv = document.createElement('div');
        questionsDiv.classList.add('quiz__questions');
        item.answers.forEach(answer => {
            const questionItem = document.createElement('div');
            questionItem.classList.add('quiz__question-item');

            const label = document.createElement('label');
            label.innerHTML = `<span>${answer}</span>
                              <input type="radio" name="${item.name}">
                              <span class="checkmark"></span>`;

            questionItem.appendChild(label);
            questionsDiv.appendChild(questionItem);
        });

        form.appendChild(title);
        form.appendChild(questionsDiv);
        quizItemsContainer.appendChild(form);
    });

    const quizProgressBarStart = document.querySelector('.quiz__progressbar__end');
    const counterQuizProgress = document.querySelector('.quiz__progressbar__separator-inside span')
    quizProgressBarStart.textContent = totalQuestions;
    const quizProgressBar = document.querySelector('.quiz__progressbar__separator');
    const firstQuizItem = document.querySelector('.quiz__item.visible');
    const firstQuestionItems = firstQuizItem.querySelectorAll('.quiz__question-item');
    firstQuestionItems.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add('active');
        }, 100 * index);
    });

    function updateActiveClass() {
        const selectedBtn = this;
        const prevQuizSection = selectedBtn.closest('.quiz__item');
        const nextQuizSection = prevQuizSection.nextElementSibling;
        const currentQuestionName = prevQuizSection.dataset.questionName;
        const questionText = prevQuizSection.querySelector('.quiz__item-title h3').textContent;
        const correctAnswer = AnswerQuestion.find(item => item.name === currentQuestionName)?.correct;

        const selectedRadio = prevQuizSection.querySelector('input[type="radio"]:checked');
        if (selectedRadio) {
            const selectedAnswer = selectedRadio.closest('.quiz__question-item').querySelector('span').textContent.trim();
            const quizResultContainer = document.querySelector('.quiz__results');
            const quizQuestionAnswer = document.createElement('div');
            quizQuestionAnswer.classList.add('quiz-result__item');

            const resultTitle = document.createElement('div');
            resultTitle.classList.add('quiz__item-result-title');
            const titleHeading = document.createElement('h3');
            titleHeading.textContent = `${questionText}`;
            resultTitle.appendChild(titleHeading);

            const resultText = document.createElement('p');
            if (selectedAnswer === correctAnswer) {
                trueAnswer++;
                quizQuestionAnswer.classList.add('quiz-result-true');
                resultText.textContent = `${correctAnswer}`;
            } else {
                falseAnswer++;
                quizQuestionAnswer.classList.add('quiz-result-false');
                resultText.textContent = `${correctAnswer}`;
            }

            quizQuestionAnswer.appendChild(resultTitle);
            quizQuestionAnswer.appendChild(resultText);
            quizResultContainer.appendChild(quizQuestionAnswer);
            counterQuizProgress.textContent = currentQuestionIndex + 1;
            currentQuestionIndex++;

            const progressPercentage = (currentQuestionIndex / totalQuestions) * 100;
            if (nextQuizSection) {
                quizProgressBar.style.width = `${progressPercentage}%`;
            } else {
                quizProgressBar.style.width = '100%';
            }
        }

        setTimeout(() => {
            prevQuizSection.classList.remove('visible');
            if (nextQuizSection && nextQuizSection.classList.contains('quiz__item')) {
                nextQuizSection.classList.add('visible');
                nextQuizSection.scrollIntoView({ behavior: 'smooth' }); // Прокрутка к следующему вопросу
                const quizInput = nextQuizSection.querySelectorAll('.quiz__question-item');
                quizInput.forEach((el, index) => {
                    setTimeout(() => {
                        el.classList.add('active');
                    }, 100 * index);
                });
            } else {
                document.querySelector('.quiz__progressbar').classList.add('hide');
                const quizResultContainer = document.querySelector('.quiz__results');
                const quizResultElements = quizResultContainer.querySelectorAll('.quiz-result__item');
                quizResultContainer.classList.add('visible');
                quizResultElements.forEach((el, index) => {
                    setTimeout(() => {
                        el.classList.add('visible');
                    }, 100 * index);
                });
                const quizResultTextContainer = document.querySelector('.quiz__results-text');
                const quizResultTextUp = document.createElement('p');
                const quizResultTextDown = document.createElement('p');
                const quizTitle = document.querySelector('.quiz__title h1');
                quizResultTextContainer.appendChild(quizResultTextUp);
                quizResultTextContainer.appendChild(quizResultTextDown);
                if (trueAnswer === AnswerQuestion.length) {
                    quizResultTextUp.textContent = 'Вы правильно ответили на все вопросы.';
                    quizResultTextDown.textContent = 'Вы действительно отлично разбираетесь в IT.';
                    quizTitle.textContent = 'Поздравляем!';
                } else if (falseAnswer === AnswerQuestion.length) {
                    quizResultTextUp.textContent = 'Вы неправильно ответили на все вопросы.';
                    quizResultTextDown.textContent = 'Нужно подучить теорию.';
                    quizTitle.textContent = 'Упс :(';
                } else {
                    quizResultTextUp.textContent = `Вы ответили правильно на ${trueAnswer} вопросов.`;
                    quizResultTextDown.textContent = 'Так держать!';
                    quizTitle.textContent = 'Хороший результат!';
                }
            }
        }, 1000);
    }

    const quizItemBtn = document.querySelectorAll('.quiz__question-item input[type=radio]');
    quizItemBtn.forEach(btn => {
        btn.addEventListener('change', updateActiveClass);
    });
});