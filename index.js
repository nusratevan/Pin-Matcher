function getPin() {
    const pin = Math.round(Math.random() * 10000)
    const pinString = pin + ''
    if (pinString.length == 4) {
        return pin
    }
    else {
        return getPin()
    }
}


function getInInput() {
    const pin = getPin()
    document.getElementById('input').value = pin
}
document.getElementById('calc-pad').addEventListener('click', function (e) {
    const clickNum = e.target.innerText
    const calc = document.getElementById('calc-display')

    if (isNaN(clickNum)) {

        if (clickNum == 'C') {
            calc.value = ''
        }
    }
    else {
        const previousNm = calc.value
        const newNUm = previousNm + clickNum
        calc.value = newNUm
    }
})
function verifyPin() {
    const pin = document.getElementById('input').value
    const calcNUm = document.getElementById('calc-display').value
    if (pin == calcNUm) {
        document.getElementById('success').style.display = 'block'
        document.getElementById('fail').style.display = 'none'
    }
    else {
        document.getElementById('fail').style.display = 'block'
        document.getElementById('success').style.display = 'none'
    }

}