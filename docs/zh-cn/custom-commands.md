# 自定义命令

## 添加新命令

`!command add <前缀> <命令名称> <响应>`

!> 默认权限为 **MODERATOR**

### 参数

-`前缀`
  -*必填* - 可以是任何特殊字符
-`命令名称`
  -*必填* - 命令名称
-`回应`
  -*必填* - 机器人在触发时应给出的响应


### 例子

<blockquote>
  <strong>主持人:</strong> !command add !no yes<br>
  <strong>bot:</strong> @主持人, successfully added command no.<br>
  <strong>user:</strong> !no<br>
  <strong>bot:</strong> yes
</blockquote>


<blockquote>
  <strong>主持人:</strong> !command add !dice ${username} rolled a ${random 1 6}<br>
  <strong>bot:</strong> @主持人, successfully added command dice.<br>
  <strong>user150:</strong> !dice<br>
  <strong>bot:</strong> @user150 rolled a 4
</blockquote>

## 删除命令

`!command remove <前缀> <命令名>`

!> 默认权限为 **MODERATOR**

### 参数

-`前缀`
  -*必填* - 要删除的命令的前缀
-`命令名`
  -*必填* - 要删除的命令的名称


### 例子

<blockquote>
  <strong>主持人:</strong> !command remove !no yes<br>
  <strong>bot:</strong> @主持人, successfully removed command no.<br>
  <strong>user:</strong> !no<br>
  <strong>user:</strong> nothing happend :c<br>
</blockquote>

## 更新命令

`!command update <前缀> <命令名> <响应>`

!> 默认权限为 **MODERATOR**

### 参数

-`前缀`
  -*必填* - 可以是任何特殊字符
-`命令名`
  -*必填* - 命令名称
-`回应`
  -*必填* - 机器人在触发时应给出的响应


### 例子

<blockquote>
  <strong>主持人:</strong> !command add !hey gello<br>
  <strong>bot:</strong> @主持人, successfully added command hey.<br>
  <strong>主持人:</strong> !command update !hey hello<br>
  <strong>bot:</strong> @主持人, successfully updated command hey.<br>
  <strong>user:</strong> !hello<br>
  <strong>bot:</strong> hello<br>
</blockquote>


## 显示命令
 
`!command show <前缀> <命令名>`

!> 默认权限为 **MODERATOR**

### 参数

-`前缀`
  -*必填* - 可以是任何特殊字符
-`命令名`
  -*必填* - 命令名称


### 例子

<blockquote>
  <strong>主持人:</strong> !command add !dice ${username}, rolled a ${random 1 10}<br>
  <strong>bot:</strong> @主持人, successfully added command dice.<br>
  <strong>主持人:</strong> !command show !dice<br>
  <strong>bot:</strong> @主持人, ${username}, rolled a ${random 1 10}<br>
</blockquote>