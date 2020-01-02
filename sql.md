### sql

#### 181 - 超过经理收入的员工 - e - [link](https://leetcode-cn.com/problems/employees-earning-more-than-their-managers/submissions/)

```
# Write your MySQL query statement below

# 不连表，一个一个来
# select a.Name as Employee from Employee as a where a.Salary > (select b.Salary from Employee as b where a.ManagerId = b.Id)

# 连表
select a.Name as Employee from Employee as a join Employee as b on a.ManagerId = b.Id where a.Salary > b.Salary

```

### 175 - 组合两个表 - e - [link](https://leetcode-cn.com/problems/combine-two-tables/)

```
# 考察left join
# Write your MySQL query statement below

select Person.FirstName, Person.LastName, Address.City, Address.State from Person left join Address on Person.PersonId = Address.PersonId
```