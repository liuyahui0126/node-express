var list = [
    {
        user: 'lyh',
        psd: '0126'
    },
    {
        user: 'syz',
        psd: '0605'
    }
]

//模拟异步操作
function delay(time) {
    return new Promise(function (resolved) {
        setTimeout(function () {
            resolved();
        }, time)
    })
}

function ifExist(account) {
    return delay(0).then(function () {
        for (let i = 0; i < list.length; i++) {
            if (account.user == list[i].user) {
                return list[i].psd;
            }
        }
         return false;
    })
}

module.exports = ifExist;