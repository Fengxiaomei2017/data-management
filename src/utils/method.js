export const time = {
  format (date, format) {
    if (format === undefined) {
      format = date
      date = new Date()
    }
    let map = {
      M: date.getMonth() + 1, // 月份
      d: date.getDate(), // 日
      h: date.getHours(), // 小时
      m: date.getMinutes(), // 分
      s: date.getSeconds(), // 秒
      q: Math.floor((date.getMonth() + 3) / 3), // 季度
      S: date.getMilliseconds()
    }
    format = format.replace(/([yMdhmsqS])+/g, function (all, t) {
      let v = map[t]
      if (v !== undefined) {
        if (all.length > 1) {
          v = '00' + v
          v = v.substr(v.length - (t === 'S' ? 3 : 2))
        }
        return v
      } else if (t === 'y') {
        return (date.getFullYear() + '').substr(4 - all.length)
      }
      return all
    })
    return format
  },
  timeFormat (date, format) {
    return time.format(date, format)
  },
  formatAllDate (date) {
    return time.format(date, 'yyyy-MM-dd hh:mm')
  },
  formatDate (date) {
    return time.format(date, 'yyyy-MM-dd')
  },
  date (timestamp) {
    return new Date(timestamp * 1000)
  },
}

export const getLabel = (value, list, valueKey = 'value', labelKey = 'label') => {
  if(!list || !list.length) return ''
  let filter = list.filter(item => item[valueKey] === value);
  
  return filter.length > 0 ? filter[0][labelKey] : '';
}

// export const initParam = (id, row) => {
//   let getId = '';
//   let form = {};
//   getId = id || '';
//   if (row) form = Object.assign({}, row);
//   return {id: getId, form: form};
// }
