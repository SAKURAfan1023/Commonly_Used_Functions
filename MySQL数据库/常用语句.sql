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

select * from 表名称       -- 用于查询表名称所选表内所有列，*表示所有列
select 列名称 from 表名称    -- 从所选表内查询对应的列,多个列可以用逗号分隔

insert into 表名称 (列名称1,列名称2) value ('值','值') -- 列与值应当一一对应