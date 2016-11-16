## Composition

```javascript
const students = [
    {name: 'cw',    age: 27, gender:'M', allowance: 1000, department:'IT',    salary: 60000.56},
    {name: 'ken',   age: 31, gender:'M', allowance: 2000, department:'IT',    salary: 44000.32},
    {name: 'ck',    age: 35, gender:'M', allowance: 3000, department:'IT',    salary: 55000.11},
    {name: 'Ting',  age: 22, gender:'F', allowance: 4000, department:'sales', salary: 70000.85},
    {name: 'Linda', age: 27, gender:'F', allowance: 3000, department:'sales', salary: 40000.49}
]
```


```javascript
const compose = (...fns) => (val) => fns.reduce((v, fn) => fn(v), val)
    , filterIT = students => students.filter((student)=>student.department === 'IT')
    , isFemale = students => students.filter((student)=>student.gender === 'F')
    , selectAllowance = students => students.map((student)=>student.allowance)
    , selectAge = students => students.map((student)=>student.age)
    , selectSalary = students => students.map((student)=>student.salary)
    , sum = nums => nums.reduce((acc,num)=>acc+num,0)
    , avg = nums => nums.reduce((acc,num)=>acc+num,0)/nums.length
    , noDecimal = num => num.toFixed(0)
```

```javascript
const avgSalaryForIT = compose(filterIT, selectSalary, avg, noDecimal)
console.log(avgSalaryForIT(students)) // 53000

const femaleAgeAvg = compose(isFemale, selectAge, avg)
console.log(femaleAgeAvg(students)) // 24.5
```