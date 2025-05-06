-- //数据库分为关系链数据库的传统数据库和非数据链的新型数据库
-- //典型的代表：MySQL为传统数据库，Mongodb为新型数据库

-- // MySQL的组织结构：数据库>数据表>数据行>字段
-- //1.每个项目具有不同的数据库，数据表按种类划分例如user，book
-- //2.数据表里可以按字段细分，例如user按字段分password，userName
-- //3.每个数据表内有数据行存储对应数据，字段相当于列

-- //-----------------------------------------------------

-- //使用需要安装MySQL server和MySQL Workbench一个用于提供存储数据服务，一个是使用工具



-- //------------------------------------------------------语句
-- sql语法对大小写不敏感，但是名称对大小写敏感


//-------------------主句
select * from 表名称       -- 用于查询表名称所选表内所有列，*表示所有列
select 列名称 from 表名称    -- 从所选表内查询对应的列,多个列可以用逗号分隔

insert into 表名称 (列名称1,列名称2) value ('值','值') -- 列与值应当一一对应

update 表名称 set 列名称1=新值 where id=值    -- update 更新对应表，set设置对应列名称的新值来替换where哪里的旧值,where一般应当为唯一标识符

delete from 表名称 where 列名称=值      --删除对应行，一般where后面填写唯一标识符例如id



//-------------------从句
where 列-运算符-值      -- where为子句，可以限定条件，能加在任何主句的后面缩小范围 id>4 查询id大于4的值
  and 和 or --在where子句中加入and和or可以更方便的限定条件

order by 列名称1,列名称2 --按什么形式来排序,可以添加逗号来进行更小范围内的排序 order by status, username
  ASC --升序排列，默认可以不写
  DESC --降序排列

count(*) --用于统计数据条数 搭配select使用 select count(*) from users
  
AS 列名 --给列起别名 select password as psw from users




-- for example 
select 列名称 from 数据库 where id<>? and (name=?...)