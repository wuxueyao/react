# TypeScript 总结

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
### 类(class)：
- 类是用来创造对象的。
1. 定义类：
    - 使用class定义类，使用constructor定义构造函数。通过new实例化对象后，会自动调用构造函数。
    - ```javascript
        /**
         * 1.类的定义
        */
        class Person {
            public name: string;//属性
            constructor(name: string) {//构造函数 实例化类的时候触发的方法 
                this.name = name;
            }
            public printMsg() {
                console.log(`my name is ${this.name}`)
            }
        }
        var person=new Person('张三');
        person.printMsg() //my name is 张三
        ```
2. 静态属性和静态方法：
    - static修饰符修饰的属性是静态属性
    - static修饰符修饰的方法称为静态方法，不需要实例化，不会被实例继承，直接通过类来调用
3. 继承：
    - extends、super
    - extends和implement的区别
        - extends是继承父类，只要类的声明不是final或者类定义为abstract就能继承
        - implement是用来实现接口
        - 继承只能继承一个类，而实现接口则可以实现多个，只需用逗号分开即可
        - 父类的方法和子类的方法一致时，子类会替换父类
    - ```javascript
        /**
         * 2.类的继承
        */
        class Person{
            name:string;
            constructor(name:string){
                this.name=name;
            }
            run():string{
                return `${this.name}在运动`
            }
        }
        class Student extends Person{
            constructor(name:string){
                super(name);  /*初始化父类的构造函数*/
            }
        }
        var s=new Student('李四');
        console.log(s.run()) //李四在运动
        ```
    - 多态：
        - 父类定义一个方法不去实现，让继承他的子类去实现，每一个子类有不同的表现，多态属于继承
        - ```javascript
            /**
             * 多态
            */
            class Animal{
                name:string
                constructor(name:string){
                    this.name
                }
                /* 具体吃什么不知道，具体吃什么继承它的子类去实现，
                每一个子类的表现不一样 */
                eat(){
                    console.log('吃的方法')
                }
            }
            class Dog extends Animal{
                constructor(name:string){
                    super(name);
                }
                eat(){
                    console.log(`${this.name}吃骨头`)
                }
            }
            class Cat extends Animal{
                constructor(name:string){
                    super(name);
                }
                eat(){
                    console.log(`${this.name}吃鱼`)
                }
            }
            ```
4. 访问修饰符：
    - public :公有 在当前类里面、 子类 、类外面都可以访问
    - protected：保护类型 在当前类里面、子类里面可以访问 ，在类外部没法访问
    - private ：私有 在当前类里面可以访问，子类、类外部都没法访问
    - 属性如果不加修饰符，默认是public
5. 抽象类：
    - 提供其他类继承的基类，不能直接被实例化
    - 用abstract关键字定义抽象类和抽象方法
    - 抽象类中的抽象方法不包含具体实现并且必须在派生类中实现
    - abstract抽象方法只能放在抽象类里面
    - ```javascript
        /**
         * 5.抽象类
        */
        abstract class Animal{
            public name:string;
            constructor(name:string){
                this.name=name;
            }
            abstract eat():any;  //抽象方法不包含具体实现并且必须在派生类中实现。
            run(){
                console.log('其他方法可以不实现')
            }
        }
        class Dog extends Animal{
            //抽象类的子类必须实现抽象类里面的抽象方法
            constructor(name:any){
                super(name)
            }
            eat(){
                console.log(this.name+'吃狗粮')
            }
        }
        var d=new Dog('小花花');
        d.eat(); //小花花吃狗粮
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

### 装饰器(Decorators)：
- 装饰器是一种特殊类型的声明，它能够被附加到类声明、方法、属性或参数上。 
- 装饰器使用@expression这种形式，expression求值后必须为一个函数，它会在运行时被调用，被装饰的声明信息做为参数传入。
- 装饰器其实就是一个函数，在函数里可以写一些新的逻辑，包裹后面修饰的内容，将新的逻辑传递到被修饰的内容中去
- 高阶组件 -- 其实就是一个函数，就是装饰器
- @expression语法其实就是语法糖
- 配置：
    ```
    yarn add -D @babel/plugin-proposal-decorators

    //添加配置
    // 创建 .babelrc 文件
    {
        "presets": ["module:metro-react-native-babel-preset"],
        "plugins":[["@babel/plugin-proposal-decorators", { "legacy": true }]]
    }

    // tsconfig.json中添加 "experimentalDecorators": true
    {
        "compilerOptions": {
            "target": "ES5",
            "experimentalDecorators": true
        }
    }
    ```
- 作用：
    - 为我们在类的声明及成员上通过元编程语法添加标注提供了一种方式
    - 在不修改原有对象或者接口的情况下，让其表现得更好。
-  定义装饰器：
    - 装饰器本身其实是一个函数，理论上忽略参数的话，任何函数都可以当做装饰器使用。
    - 普通装饰器（无参数，本身是装饰器）：
        ```javascript
        /**
         * 普通装饰器
        */
        function helloWord(target: any) {
            console.log('hello Word!');
        }
        // 装饰器和后边的不加分号，因为是装饰后边的，是连在一起的
        @helloWord
        class HelloWordClass {
            sayHello(){
            }
        }
        ``` 
    - 装饰器工厂（带参数的装饰器，返回的是装饰器）：
        ```javascript
        /**
         * 装饰器工厂 
        */
        function addUrl(url:string){
            //这是装饰器工厂
            return function(target:any){ 
                //这才是装饰器
                target.prototype.url = url;
            }
        }

        @addUrl('http://www.baidu.com')
        class HomeServer{
            url:string|undefined;
            getData(){
                console.log(this.url)
                // 虽然这里没有写url，但是装饰器函数里边写了，所以有
            }
        }
        let home = new HomeServer();
        home.getData()
        ``` 
1. 属性装饰器
    - 属性装饰器表达式会在运行时当作函数被调用，传入下列2个参数：
        - 对于静态成员来说是类的构造函数，对于实例成员是类的原型对象
        - 成员的名字
    - 属性装饰器返回的函数会在解释类的对应属性时被调用一次，并可以得到装饰器的参数和被装饰的属性的相关信息。
    - 装饰器方法的调用只会在加载代码时执行一次，调用被装饰的属性不会触发装饰器方法。
    - ```javascript
        /**
         * 1.属性装饰器
        */
        function DefaultValue(value: string) {
            return function (target: any, propertyName: string) {
                target[propertyName] = value;
            }
        }
        class Hello {
            @DefaultValue("world") greeting: string;
        }
        console.log(new Hello().greeting);// 输出: world
        ``` 
2. 方法装饰器
    - 方法装饰器声明在一个方法的声明之前（紧靠着方法声明）
    - 它会被应用到方法的属性描述符上，可以用来监视，修改或者替换方法定义
    - 方法装饰会在运行时传入下列3个参数:
        - 对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
        - 成员的名字。
        - 成员的属性描述符。
    - 方法装饰器返回的函数会在解释类的对应方法时被调用一次，并可以得到装饰器的参数和被装饰的方法的相关信息。
    - 装饰器方法的调用只会在加载代码时执行一次，调用被装饰的方法不会触发装饰器方法。
    - ```javascript
        /**
         * 2.方法装饰器
        */
        function enumerable(value: boolean) {
            return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
                // target是类原型对象
                target.name = 'liu';//在原型上直接加一个属性
                console.log(propertyKey)
                console.log(descriptor)
                descriptor.enumerable = value;
            };
        }
        class Greeter {
            greeting: string;
            constructor(message: string) {
                this.greeting = message;
            }
            @enumerable(false)
            greet() {
                return "Hello, " + this.greeting;
            }
        }
        console.log(new Greeter('world').name)
        ``` 
3. 参数装饰器
    - 参数装饰器表达式会在运行时当作函数被调用，传入下列3个参数：
        - 对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
        - 成员的名字。
        - 参数在函数参数列表中的索引。
    - 参数装饰器返回的函数会在解释方法的参数时被调用一次，并可以得到参数的相关信息。
    - 装饰器方法的调用只会在加载代码时执行一次，调用被装饰的参数的方法不会触发装饰器方法。
    - 参数装饰器只能用来监视一个方法的参数是否被传入
    - 参数装饰器的返回值会被忽略
    - ```javascript
        /**
         * 3.参数装饰器
        */
        function logParams(params:any) {
            console.log(params)  // 装饰器传入的参数：uuid
            return function(target:any, methodName:any, paramIndex:any) {
                console.log(target)  // { constructor:f, getData:f } 
                console.log(methodName)  // getData
                console.log(paramIndex)  // 0
            }
        }
        class HttpClient {
            constructor() { }
            getData(@logParams('uuid') uuid:any) {
                console.log(uuid);
            }
        }
        ``` 
4. 类装饰器
    - 类装饰器应用于类构造函数，可以用来监视，修改或替换类定义。
    - 类的构造函数将作为唯一参数传递给装饰器。
    - 如果类装饰器返回一个值，它会使用返回的构造函数替换原来的类声明
    - 通过类装饰器可以对类的原型对象做一定的修改
    - ```javascript
        /**
         * 4.类装饰器
        */
        function sealed(target: Function) {
            Object.seal(target);
            Object.seal(target.prototype);
        }

        @sealed
        class Demo {}
        ``` 

5. 访问器装饰器
    - 访问器装饰器应用于访问器的属性描述符，可用于观察，修改或替换访问者的定义。 访问器装饰器不能在声明文件中使用，也不能在任何其他环境上下文中使用（例如在声明类中）。
    - TypeScript不允许为单个成员装饰get和set访问器。相反，该成员的所有装饰器必须应用于按文档顺序指定的第一个访问器。这是因为装饰器适用于属性描述符，它结合了get和set访问器，而不是单独的每个声明。
    - 访问器装饰器表达式会在运行时当作函数被调用，传入下列3个参数：
        - 对于静态成员来说是类的构造函数，对于实例成员是类的原型对象
        - 成员的名字
        - 成员的属性描述符
        - 如果访问器装饰器返回一个值，它会被用作方法的属性描述符
    - 访问器装饰器返回的函数会在解释类的对应访问器时被调用一次，并可以得到装饰器的参数和被装饰的访问器的相关信息。
    - 装饰器方法的调用只会在加载代码时执行一次，调用被装饰的访问器不会触发装饰器方法。
    - ```javascript
        /**
         * 5.访问器装饰器
        * 访问器装饰器（@configurable），应用于Point类的成员上
        */
        function configurable(value: boolean) {
            return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
                descriptor.configurable = value;
            };
        }
        class Point {
            private _x: number;
            private _y: number;
            constructor(x: number, y: number) {
                this._x = x;
                this._y = y;
            }

            @configurable(false)
            get x() { return this._x; }

            @configurable(false)
            get y() { return this._y; }
        }
        ``` 
- 装饰器组合
    - 多个装饰器可以同时应用到被装饰对象上
    - 当多个装饰器应用在一个声明上时会进行如下步骤的操作：
        - 由上至下依次对装饰器表达式求值。
        - 求值的结果会被当作函数，由下至上依次调用
    - 装饰器加载顺序：
        ```javascript
        /**
         * 装饰器组合简例
        */
        function f() {
            console.log('f求值');
            return function(target: any) {
                console.log('f装饰');
            }
        }
        function g() {
            console.log('g求值');
            return function(target: any) {
                console.log('g装饰');
            }
        }

        @f()
        @g()
        class Demo {

        }
        //结果：
        //f求值
        //g求值
        //g装饰
        //f装饰
        //解析：
        //因为先求值，所以在上面的f会比g先求值。因为装饰器是由下到上装饰，所以求值后的g比f先执行
        ```
        ```javascript
        /**
         * 装饰器组合
        */
        function ClassDecorator() {
            return function (target) {
                console.log("I am class decorator");
            }
        }
        function MethodDecorator() {
            return function (target, methodName: string, descriptor: PropertyDescriptor) {
                console.log("I am method decorator");
            }
        }
        function Param1Decorator() {
            return function (target, methodName: string, paramIndex: number) {
                console.log("I am parameter1 decorator");
            }
        }
        function Param2Decorator() {
            return function (target, methodName: string, paramIndex: number) {
                console.log("I am parameter2 decorator");
            }
        }
        function PropertyDecorator() {
            return function (target, propertyName: string) {
                console.log("I am property decorator");
            }
        }

        @ClassDecorator()
        class Hello {
            @PropertyDecorator()
            greeting: string;
            @MethodDecorator()
            greet( @Param1Decorator() p1: string, @Param2Decorator() p2: string) { }
        }
        //输出结果：
        //I am property decorator
        //I am parameter2 decorator
        //I am parameter1 decorator
        //I am method decorator
        //I am class decorator
        ```
- 小结：
    - 装饰器提供了对类的属性、方法、入参修改的能力，但是单独靠装饰器是不够的，还要通过注解配合，这样才能动态的修改原来的表现行为。因此我们可以封装一些常用的装饰器方法，达到复用的能力。但要切记，装饰器的行为是发生在编译时
    - 有多个参数装饰器时：
        - 从最后一个参数依次向前执行
        - 方法和方法参数中参数装饰器先执行。
        - 类装饰器总是最后执行。
        - 方法和属性装饰器，谁在前面谁先执行。因为参数属于方法一部分，所以参数会一直紧紧挨着方法执行。
        - 上述例子中如果属性和方法调换位置，则结果输出如下：
            ```javascript
            //I am parameter2 decorator
            //I am parameter1 decorator
            //I am method decorator
            //I am property decorator
            //I am class decorator
            ```

    