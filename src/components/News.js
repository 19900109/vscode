import React from 'react'
import logo from '../assets/images/logo.svg'

class News extends React.Component{
    // 构造函数
    // 子组件继承了Component
    constructor(){
        super()
        // 定义数据
        this.state ={
            msg:'新闻',
            list:[
                '11111111',
                '22222222',
                '33333333',
                '44444444'
            ],
            list2:[
                <h2 key='1'>我是一个h2</h2>,
                <h2 key='2'>我是一个h2</h2>,
                <h2 key='3'>我是一个h2</h2>
            ],
            list3:[
                {title:'新闻111111'},
                {title:'新闻222222'},
                {title:'新闻333333'},
                {title:'新闻444444'}
            ]
        }
    }

    render(){
        let listResult = this.state.list.map(function(v,k) {
            return <li key={k}>{v}</li>
        })
        return (
            <div className='news'>
                {this.state.msg}
                <hr />
                {/* 循环数组 */}
                {this.state.list2}

                {listResult}
    
                {
                    this.state.list3.map((v,k) =>{
                        return (
                            <li key={k}>{v.title}</li>
                        )
                    })
                }

                {/* 引入图片  本地图片与远程图片*/}
                <img src={logo}></img>
                <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1556028303&di=164f114d38a22abb5f3567d02eb03d3c&src=http://pic35.photophoto.cn/20150627/0017030558538778_b.jpg"></img>
                <img src={require('../assets/images/logo.svg')}></img>
                <hr />
            </div>
        )
    }
}

export default News
