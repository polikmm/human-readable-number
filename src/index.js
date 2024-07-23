module.exports = function toReadable(count, str = '') {
    const nums = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    const decimalNum = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
    const decade = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']

    const current = count.toString().split('')

    if (current.length === 1) str = `${str} ${nums[count]}`

    if (current.length === 2) {
        if (count == 10) return `${str} ten`.trim()
        if (current[0] === '0' && current[1] !== '0') return `${str} ${nums[current[1]]}`.trim()
        if (count % 10 === 0) str = `${str} ${decade[current[0] - 2]}`
        if (count % 10 !== 0) {
            count > 20 ? str = `${str} ${decade[current[0] - 2]} ${nums[current[1]]}` : str = `${str} ${decimalNum[current[1] - 1]}`
        }
    }

    if (current.length === 3) {
        if (current[1] === '0' && current[2] === '0') {
            str = `${nums[current[0]]} hundred`
        } else {
            str = `${nums[current[0]]} hundred`
            count = count.toString().split('').splice(1).join('')
            str = toReadable(count, str)
        }
    }
    return str.trim()
}
