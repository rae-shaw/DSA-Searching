function binarySearch(array, value, start, end) {
    var start = start === undefined ? 0 : start;
    var end = end === undefined ? array.length : end;

    if (start > end) {
        return -1;
    }

    const index = Math.floor((start + end) / 2);
    const item = array[index];

    console.log(start, end);
    if (item == value) {
        return index;
    }
    else if (item < value) {
        return binarySearch(array, value, index + 1, end);
    }
    else if (item > value) {
        return binarySearch(array, value, start, index - 1);
    }
};

console.log(binarySearch([3, 5, 6, 8, 11, 12, 14, 15, 17, 18], 8, 3, 18))


const books = [
    { dewy: '004.000', title: 'title1' },
    { dewy: '005.000', title: 'title2' },
    { dewy: '003.000', title: 'title3' },
    { dewy: '006.000', title: 'title4' },
    { dewy: '007.000', title: 'title5' },

];

//

function findBook(array, dewey, title) {
    //object.keys at beginning index
    const keys = Object.keys(array[0]);
    array.forEach(book => {
        if (book[keys[0]] === dewey && book[keys[1]] === title) {
            return book;
        }
    });
}
findBook(books, '003.000', 'tite3');

function treeTraversals() {
    let BST = new BinarySearchTree();
    BST.insert(25, '25');
    BST.insert(15, '15');
    BST.insert(50, '50');
    BST.insert(10, '10');
    BST.insert(24, '24');
    BST.insert(35, '35');
    BST.insert(70, '70');
    BST.insert(4, '4');
    BST.insert(12, '12');
    BST.insert(18, '18');
    BST.insert(31, '31');
    BST.insert(44, '44');
    BST.insert(66, '66');
    BST.insert(90, '90');
    BST.insert(22, '22');

    const preOrder = (bst) => {
        console.log({ preOrder: bst.key });
        if (bst.left) {
            preOrder(bst.left);
        }
        if (bst.right) {
            preOrder(bst.right);
        }
    };

    const inOrder = (bst) => {

        if (bst.left) {

            inOrder(bst.left);
        }
        console.log(`bst.key `, { inOrder: bst.key });
        if (bst.right) {
            inOrder(bst.right);
        }
    };

    const postOrder = (bst) => {
        if (bst.left) {
            postOrder(bst.left);
        }
        if (bst.right) {
            postOrder(bst.right);
        }
        console.log(`postorder bst.key `, { postOrder: bst.key });
    };

    preOrder(BST);
    inOrder(BST);
    postOrder(BST);
}