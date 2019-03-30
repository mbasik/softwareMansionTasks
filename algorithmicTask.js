const A = [2, 3, 9, 2, 5, 1, 3, 7, 10];
const B = [2, 1, 3, 4, 3, 10, 6, 6, 1, 7, 10, 10, 10];

function filterArray(A, B) {
    // time complexity: N
    const numOfRepeat = countNumOfRepeats(B);

    // time complexity: N^2
    const primesInB = findPrimes(numOfRepeat);

    // time complexity: N^2
    return subtractArrays(A, primesInB);
}

function subtractArrays(arr1, arr2) {
    result = [];
    for (const itemFromArr1 of arr1) {
        let isPresentedInArr2 = false;
        for (itemFromArr2 of arr2) {
            if (itemFromArr1 == itemFromArr2) {
                isPresentedInArr2 = true;
                break;
            }
        }
        if (!isPresentedInArr2) {
            result.push(itemFromArr1);
        }
    }

    return result;
}

function countNumOfRepeats(arr) {
    let numOfRepeat = {};

    for (const item of arr) {
        if (numOfRepeat[item] === undefined) {
            numOfRepeat[item] = 0;
        }
        numOfRepeat[item]++;
    }

    return numOfRepeat;
}

function findPrimes(numOfRepeat) {
    let primes = [];
    for (const key in numOfRepeat) {
        let value = numOfRepeat[key];
        if (isPrime(value) == true) {
            primes.push(key);
        }
    }

    return primes;
}

function isPrime(num) {
    if (num == 0 || num == 1) {
        return false;
    }

    for (i = 2; i <= num / 2; ++i) {
        if (num % i == 0) {
            return false;
        }
    }

    return true;
}

console.log(filterArray(A, B));
