import React, { useState,useEffect } from 'react'
import {useParams,Link} from 'react-router-dom'
import '../css/hList.css'
export default function HList() {
    let {id} = useParams();
    let {page} = useParams();
    console.log(id)
    console.log("第一次获取"+page)
    switch(id){
        case 'all':
            return (
                <div>
                    <Inner id={id} page={page}/>
                </div>
            )
        case 'good':
            return (
                <div>
                    <Good page={page}/>
                </div>
            )
        case 'share':
            return (
                <div>
                    <Inner id={id} page={page}/>                   
                </div>
            )
        case 'ask':
            return (
                <div>
                    <Inner id={id} page={page}/>
                </div>
            )
        case 'job':
            return (
                <div>
                    <Inner id={id} page={page}/>
                </div>
            )
        case 'dev':
            return (
                <div>
                   <Inner id={id} page={page}/>
                </div>
            )
        default:
            return;
    }
    
}

function useFetch(url){
    let [data,setData] = useState([]);
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(res=>{
            console.log(res);
            setData(res.data)
        });
    },[url])
    return data;
}
function Inner(props) {
    console.log("点击page:"+props.page)
    let data = useFetch('https://cnodejs.org/api/v1/topics/?tab='+props.id+'&page='+props.page);
    return (
        <div>
            {data.map((item)=><div className="cell">
                <p key={item.id}>
                    <span className="user_img"><img src={item.author.avatar_url} width="30" height="30"/></span>
                    <span className="purple_font">{item.reply_count}</span>/
                    <span className="gray_font">{item.visit_count}</span>
                    <Link to={'/topic/'+item.id} className="black_title">{item.title}</Link>
                    <span className="right_img">
                        <img src={item.author.avatar_url}/>
                        <span className="update_time">2个月前</span>
                    </span>
                </p>
            </div>)}
            <div className="innerpage">
                <ol>
                    {[1,2,3,4,5,6,7,8,9,10].map((page)=>(
                        <li key={page}><Link to={'/home/all/'+page}>{page}</Link></li>
                    ))
                    }
                </ol>
            </div>
        </div>
    )
}

function  Good(props){
    let data = useFetch('https://cnodejs.org/api/v1/topics/?tab=good&page='+props.page);
    return (
        <div>
             {data.map((item)=><div className="cell">
                <p key={item.id}>
                    <span className="user_img"><img src={item.author.avatar_url} width="30" height="30"/></span>
                    <span className="purple_font">{item.reply_count}</span>/
                    <span className="gray_font">{item.visit_count}</span>
                    <span className='good_green'>精华</span>
                    <Link to={'/topic/'+item.id} className="black_title">{item.title}</Link>
                    <span className="right_img">
                        <img src={item.author.avatar_url}/>
                        <span className="update_time">2个月前</span>
                    </span>
                </p>
             </div>)}
             <div className="innerpage">
                <ol>
                    {[1,2,3,4,5,6,7,8,9,10].map((page)=>(
                        <li key={page}><Link to={'/home/good/'+page}>{page}</Link></li>
                    ))
                    }
                </ol>
            </div>
        </div>
    )

}