const Promise = require('bluebird')
	, _ = require('underscore')

const fruits =  ['Apple', 'Orange', 'Papaya']

const log = (message) => (data) => {
  console.log(message, data);
  return data;
}

const somePromise = new Promise((resolve, reject)=>{
	return resolve(fruits)
})




somePromise
    .then(log('init: ')) // init: ['Apple', 'Ting', 'CK', 'Ken']
    .then((fruits)=>{
    	return _.difference(fruits, ['Apple','Papaya'])
    })
    .then(log('done: ')) // done: ['Orange']