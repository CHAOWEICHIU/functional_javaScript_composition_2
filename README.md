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
const pipe = (...fns) => (val) => fns.reduce((v, fn) => fn(v), val)
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
const avgSalaryForIT = pipe(filterIT, selectSalary, avg, noDecimal)
console.log(avgSalaryForIT(students)) // 53000

const femaleAgeAvg = pipe(isFemale, selectAge, avg)
console.log(femaleAgeAvg(students)) // 24.5
```



## Extra Link

**Explore More**

> [functional-javascript-currying](https://github.com/CHAOWEICHIU/functional-javascript-currying)


> [functional_javaScript_composition_1](https://github.com/CHAOWEICHIU/functional_javaScript_composition_1)


> [functional_javaScript_composition_2](https://github.com/CHAOWEICHIU/functional_javaScript_composition_2)


> [functional-javascript-purity](https://github.com/CHAOWEICHIU/functional-javascript-purity)


**Usage**


> [Custom Real World Functions](https://github.com/CHAOWEICHIU/ccw-custom-functions)

```javascript
decimalPlaces('.05')             // return 2
toTitleCase('hoW aRe yOU')       // return 'How Are You'
truncateString("how are you", 5) // return how a ...
validZipcode('48326')            // return true
// More ...
```

## My Work

### [Food Recipes Application](https://github.com/CHAOWEICHIU/favorite-food-recipe)

>It is an application where has all recipes around the world. You would be able to see what ingredient that you need, what steps that you need to take in order to make the dish.




## About me

> :fire: Full Stack Web Developer

I am a freelance full-stack web developer, and I get so 
excited whenever there is a chance that I can challenge
myself and become a better software developer.


> :fire: Test Enthusiastic

Few months age, I have exposed to TDD(test-driven development) way
of writing a software. Since then, I have fallen in love with that.
I was inspired by [MPJ](https://www.youtube.com/watch?v=TWBDa5dqrl8)
and [his video](https://www.youtube.com/watch?v=vqAaMVoKz1c)


> :fire: Reusable Code

:heart: Code that can be repeatedly used with little effort

:heart: Code that can be tested easily

:heart: Code that can express themself


------------------------------------------


