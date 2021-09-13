'use strict';

const promise1 = new Promise((resolve, reject) => {
  document.addEventListener('click', () => {
    resolve();
  });

  setTimeout(() => {
    reject();
  }, 3000);
});

const promise2 = new Promise((resolve, reject) => {
  document.addEventListener('mousedown', (event) => {
    if (event.button === 0 || event.button === 2) {
      resolve();
    }
  });
});

const promise3 = new Promise((resolve, reject) => {
  let leftCount = 0;
  let rightCount = 0;

  document.addEventListener('mousedown', (event) => {
    if (event.button === 0) {
      leftCount++;
    }

    if (leftCount > 0 && rightCount > 0) {
      resolve();
    }
  });

  document.addEventListener('mousedown', (event) => {
    if (event.button === 2) {
      rightCount++;
    }

    if (leftCount > 0 && rightCount > 0) {
      resolve();
    }
  });
});

promise1
  .then(() => {
    createMessage('success', 'First promise was resolved');
  })
  .catch(() => {
    createMessage('warning', 'First promise was rejected');
  });

promise2
  .then(() => {
    createMessage('success', 'Second promise was resolved');
  });

promise3
  .then(() => {
    createMessage('success', 'Third promise was resolved');
  });

function createMessage(classOfMessage, textMessage) {
  const message = document.createElement('div');

  message.classList.add(`${classOfMessage}`);
  message.textContent = `${textMessage}`;
  message.setAttribute('data-qa', 'notification');

  document.body.append(message);
}
