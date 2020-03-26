### 接口(interface)：
- 描述一个对象的取值规范，不实现具体的对象
- 作用：
    - 对“对象”进行约束描述
    - 对“类”的一部分行为进行抽象
1. 属性接口：
    - 接口中定义的是需要的属性以及属性的数据类型
    - 接口中可以定义确定属性、可选属性、任意属性、只读属性
        - 确定属性：接口中约束好的确定属性，定义对象变量时必须有
        - ```javascript
            /**
             * 1.属性接口：
            */
            interface Person{
                name:string,
                age?:number,
                readonly gender: string,
                [propName:string]:any
            }
            let person:Person = {
                name:'wxy',
                age: 18,
                gender:'女'
            }
            ```
        - 可选属性：定义时只需在该属性名称后面加一个"?" ，是表示在对象变量中可以不存在
        - ```javascript
            age?:number
            ```

        - 任意属性：一旦定义了任意属性，那么确定属性和可选属性的类型都必须是任意属性类型的子类；定义了任意属性后，对象变量中的属性个数可以比接口中的属性数量多
        - ```javascript
            [propName:string]:any
            ```

        - 只读属性：只读属性也属于确定属性，在对象变量定义时必须有值，并且该值之后不能再修改
        - ```javascript
            readonly gender: string,
            ``` 

2. 函数接口：
    - 对方法传入的参数以及返回值进行约束
    - 通过函数接口声明的函数参数类型要和接口中定义的一样
    - ```javascript
        /**
         * 2.函数接口
        */
        interface MyFunc{
            (param1:string,param2:number):boolean;
        }
        let myfunc:MyFunc=function(p1:string,p2:number){
            return true;
        }
        myfunc('20',20);
        ``` 

3. 类接口：
    - 对类进行约束，和抽象类相似
    - 类通过implement来实现接口
    - 类不能继承接口，是实现接口
    - 接口描述的是类的公共部分，不包括私有部分，所以不会检查类是否具有某些私有成员
    - 类实现一个接口时，只对示例部分进行类型检查，静态部分不在检查的范围内
    -  ```javascript
        /**
         * 3.类接口
        */
        interface MyClass{
            name:string,
            age:number,
            pwd:string
        }
        class myclass implements MyClass{
            name = 'zhangsan';
            age = 20;
            pwd = '123456'
        }
        console.log(new myclass())
        ``` 

4. 混合类型接口：
    - 一个对象同时作为函数和对象使用，并带有额外的属性
    - ```javascript
        /**
         * 4.混合类型
        */
        interface Counter{
            interval:number;
            reset():void;
            (start:number):string;
        }
        let c:Counter;
        c(10);
        c.reset();
        ``` 

5. 继承：
    - extends
    - 接口可以继承接口，同时，一个接口可以继承多个接口，从而创建出多个接口的合成接口
    - 接口可以继承类，并且private和protected的成员也会被继承，进而可知，只有被继承的类自己或其子类能够实现该接口
    - 类不能继承接口，是实现接口
    - ```javascript
        /**
         * 5.继承
        */
        interface Shape {
            color: string;
        }

        interface Square extends Shape {
            sideLength: number;
        }

        let square = {} as Square;
        square.color = "blue";
        square.sideLength = 10;
        ``` 
---
### 泛型(Generics)：
- 指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性。
- 之所以叫泛型，是因为能够作用于一系列类型，是在具体类型上的一层抽象
- 作用：
    - 使用泛型来创建可重用的组件
    - 一个组件可以支持多种类型的数据
1. 泛型函数
    - 泛型函数与非泛型函数相似，只是有一个类型参数在最前面，像函数声明一样。
    - ```javascript
        /**
         * 1.泛型函数
        */
        function getArray<T>(length:number,value:T):Array<T>{
            let arr:T[]=[];
            for(var i=0;i<length;i++){
                arr[i]=value;
            }
            return arr;
        }
        console.log(getArray<string>(3,'x')); //['x','x','x']
        ``` 

2. 泛型接口
    - 带类型参数的接口叫泛型接口，可以用接口来描述一个泛型函数
    - 泛型接口的作用就是提炼出来，好多函数都能用
    - ```javascript
        /**
         * 2.泛型接口
        */
        interface GenericIdentityFn<T>{
            (arg:T):T;
        }
        let myIdentity:GenericIdentityFn<number> = function(arg){
            return arg;
        }
        console.log(myIdentity(2));
        ``` 

3. 泛型类
    - 带类型参数的类叫泛型类，泛型类使用<>包围泛型类型变量。
    - 类分为静态部分和示例两部分，泛型类的类型值得指的是示例部分的类型，静态属性不能使用该泛型类型。
    - ```javascript
        /**
         * 3.泛型类
        */
        class getMsg<T>{
            name:T;
            msg:(arg:T) => T;
        }

        let getmsg = new getMsg<string>();
        getmsg.name = 'wxy';
        getmsg.msg=function(arg:string){
            return `my name is ${arg}`;
        }
        console.log(getmsg.msg('wxy')); //my name is wxy
        ``` 
4. 泛型约束
    - 通过extends来实现泛型约束
    - 想要限制函数处理的参数类型必须带有某一特定属性
    - 类型变量继承某一接口，从而变量有了特定的约束
    - ```javascript
        /**
         * 4.泛型约束
        */
        interface Length{
            length:number;
        }
        function logLength<T extends Length>(arg:T):T{
            console.log(arg.length);
            return arg;
        }
        console.log(logLength(3)); //报错，因为传入的参数没有length属性
        console.log(logLength({length:10,value:3})) //输出3，因为传入的参数含有length属性
        ``` 

---

### 装饰器
- 装饰器是一种特殊类型的声明，它能够被附加到类声明、方法、属性或参数上。 
- 装饰器使用@expression这种形式，expression求值后必须为一个函数，它会在运行时被调用，被装饰的声明信息做为参数传入。
- 作用：
    - 在不修改原有对象或者接口的情况下，让其表现得更好。
1. 类装饰器
    - ```javascript
        
        ``` 
2. 方法装饰器
    - ```javascript
        
        ``` 
3. 属性装饰器
    - ```javascript
        
        ``` 
4. 参数装饰器
    - ```javascript
        
        ``` 
5. 装饰器组合
    - ```javascript
        
        ``` 

    