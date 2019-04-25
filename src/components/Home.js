import React,{ Component } from 'react'
import '../assets/css/index.css'

// 绑定属性注意 className =class  htmlFor=for  style
class Home extends Component{
    // 构造函数
    // 子组件继承了Component super父类的this
    // props 父子附件传值
    constructor(props){
        super(props)
        // 定义数据
        this.state ={
            name:"张三",
            age:30,
            json:{
                iphone:"1111111111"
            },
            msg:"我是Home组件",
            // 绑定属性
            title:'我是一个title',
            color:'red',
            style:{
                color:'red',
                fontSize:'12px'
            }
        }
        // 第二种改变this指向
        this.getData1 = this.getData1.bind(this)
    }
    run(){
        alert("click")
    }
    getData(){
        alert(this.state.msg)
    }
    getData1(){
        alert(this.state.msg)
    }
    getData2 = () => {
        alert(this.state.msg)
    }
    setData = () =>{
        this.setState({
            msg:"home改变"
        })
    }
    setData1 = (str,str1) =>{
        this.setState({
            name:`${str}和${str1}`
        })
    }
    // jsx语法
    render(){
        return (
            <div>
                <h2>hello word {this.state.msg}</h2>
                <div title={this.state.title} > 我是一个DIV</div>
                {/* 绑定class */}
                <div className="red" > 我是一个红色的DIV</div>
                <div className={this.state.color} > 我也是一个红色的DIV</div>
                <p> 我是P标签</p>
                <p>name {this.state.name}</p>
                <p>age {this.state.age}</p>
                <p>iphone {this.state.json.iphone}</p>
                <label htmlFor='name'>姓名</label>
                <input id='name'></input>
                <div style={{"color":"red"}}>style绑定方式1</div>
                <div style={this.state.style}>style绑定方式2</div>
                <button onClick={this.run}>执行click</button>
                <button onClick={this.getData.bind(this)}>js获取数据 改变this第一种</button>
                <button onClick={this.getData1}>js获取数据 改变this第二种</button>
                <button onClick={this.getData2}>js获取数据 改变this第三种</button>
                <button onClick={this.setData}>改变值</button>
                <button onClick={this.setData1.bind(this,"李四","王五")}>传值</button>
            </div>
        )
    }
}


export default Home
