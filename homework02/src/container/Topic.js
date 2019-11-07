import React, { useState,useEffect,Component } from 'react'
import {useLocation,useParams} from 'react-router-dom'
import '../css/topic.css'
export default function Topic() {
    let {id} = useParams();
    let {author_id} = useParams();
    
    console.log("zhe"+author_id)
    let data = useFetch('https://cnodejs.org/api/v1/topic/'+author_id);
    console.log(data)
    var from=data.tab;
    switch(from){
        case 'good':
            from='精华';
            break;
        case 'share':
            from='分享';
            break;
        case 'ask':
            from='问答';
            break;
        case 'job':
            from='招聘';
            break;
        case 'dev':
            from='客户端测试';
            break;
        default:
            break;
    }
    console.log(from);
    console.log(typeof(data.author))
    return (
        <div className="topic">
            <div className="topic_header">
                <p className="topic_title">{data.title}</p>
                <p className="topic_little"><span>·</span>发布于6个月前<span>·</span>作者admin <span>·</span>1130次浏览<span>·</span>来自 {from}</p>             
            </div>
            <div className="topic_inner">
                <div dangerouslySetInnerHTML={{__html:data.content}}></div>
            </div>
        </div>
        )
    
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
