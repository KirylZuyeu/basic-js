module.exports = function repeater(str, options) {
  const repeatTimes = options.repeatTimes || 1
  const separator = options.separator || '+'
  const addition = String(options.addition !== undefined ? options.addition : '')
  const additionRepeatTimes = options.additionRepeatTimes || 1
  const additionSeparator = options.additionSeparator || '|'

  let sumAddition = []
  for (let i = 0; i < additionRepeatTimes; i++) {
    sumAddition.push(addition)
  }
  let resultAddition = sumAddition.join(additionSeparator)

  let resultString = [];
  for (let i = 0; i < repeatTimes; i++) {
    resultString.push(`${str}${resultAddition}`)
  }

  return resultString.join(separator)
};
  