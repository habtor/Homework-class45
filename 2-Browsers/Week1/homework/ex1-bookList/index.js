//cspell: disable
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-1-the-book-list

I'd like to display my three favorite books inside a nice webpage!

1. Iterate through the array of books.
2. For each book, create a `<p>`
element with the book title and author.
3. Use a `<ul>`  and `<li>` to display the books.
4. Add an `<img>` to each book that links to a URL of the book cover.
5. Change the style of the book depending on whether you have read it(green) or not(red).

The end result should look something like this:
https://hackyourfuture.github.io/example-pages/Browsers/Week1/1-booklist/

-----------------------------------------------------------------------------*/
//cspell: enable

function createBookList(books) {
  const ul = document.createElement('ul');
  const booksImg = [
    'the_design_of_everyday_things',
    'the_most_human_human',
    'the_pragmatic_programmer',
  ];

  for (let i = 0; i < books.length; i++) {
    const p = document.createElement('p');
    const img = document.createElement('img');
    const li = document.createElement('li');

    p.textContent = `${books[i].title} by ${books[i].author}`;
    img.src = `./assets/${booksImg[i]}.jpg`;

    li.appendChild(p);
    li.appendChild(img);

    if (books[i].alreadyRead) {
      li.style.backgroundColor = 'green';
    } else {
      li.style.backgroundColor = 'red';
    }

    ul.appendChild(li);
  }

  return ul;
}

function main() {
  const myBooks = [
    {
      title: 'The Design of Everyday Things',
      author: 'Don Norman',
      isbn: '978-0465050659',
      alreadyRead: false,
    },
    {
      title: 'The Most Human Human',
      author: 'Brian Christian',
      isbn: '978-1617933431',
      alreadyRead: true,
    },
    {
      title: 'The Pragmatic Programmer',
      author: 'Andrew Hunt',
      isbn: '978-0201616224',
      alreadyRead: true,
    },
  ];

  const ulElement = createBookList(myBooks);
  document.querySelector('#bookList').appendChild(ulElement);
}

window.addEventListener('load', main);
