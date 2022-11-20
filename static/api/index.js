// 导入 axios
import axios from 'axios'
// 接口封装
// 设置全局请求的根路径 
axios.defaults.baseURL = 'http://120.79.60.170:3000'

// 说明 : 调用此接口 , 可获取 banner( 轮播图 ) 数据
// type:资源类型,对应以下类型,默认为 0 即 PC
// 0: pc
// 1: android
// 2: iphone
// 3: ipad
// address: 请求的地址
export function getBanner(url, type){
	return axios({
		url,
		params: { type }
	})
}

// 说明 : 调用此接口 , 可获取热门歌手数据
// 可选参数 : limit: 取出数量 , 默认为 50
// offset: 偏移数量 , 用于分页 , 如 :( 页数 -1)*50, 其中 50 为 limit 的值 , 默认 为 0
// 接口地址 : /top/artists
// 调用例子 : /top/artists?offset=0&limit=30
export function getHotSinger(url, limit, offset){
	return axios({
		url,
		params: {
			limit,
			offset
		}
	})
}

// 说明 : 调用此接口 , 可获取推荐新音乐
// 可选参数 : limit: 取出数量 , 默认为 10 (不支持 offset)
// 接口地址 : /personalized/newsong
// 调用例子 : /personalized/newsong
export function getNewSong(url, limit){
	return axios({
		url,
		params: { limit }
	})
}


// 说明 : 调用此接口 , 传入歌手 id, 可获得获取歌手详情
// 必选参数 : id: 歌手 id
// 接口地址 : /artist/detail
// 调用例子 : /artist/detail?id=11972054 (Billie Eilish)
export function getDetail(url, id){
	return axios({
		url, 
		params: { id }
	})
}


// 说明 : 调用此接口,可获取歌手热门 50 首歌曲
// 必选参数 :
// id : 歌手 id
// 接口地址 : /artist/top/song
// 调用例子 : /artist/top/song?id=6452
export function hotMusicList(url, id){
	return axios({
		url,
		params: { id }
	})
}



//说明: 调用此接口,传入歌曲 id, 可获取音乐是否可用,返回 { success: true, message: 'ok' } 或者 { success: false, message: '亲爱的,暂无版权' }
// 必选参数 : id : 歌曲 id
// 可选参数 : br: 码率,默认设置了 999000 即最大码率,如果要 320k 则可设置为 320000,其他类推
// 接口地址 : /check/music
// 调用例子 : /check/music?id=33894312

export function getMusic(url, id){
	return axios({
		url,
		params: { id }
	})
}


//说明 : 调用此接口 , 传入音乐 id 可获得对应音乐的歌词 ( 不需要登录 )
// 必选参数 : id: 音乐 id
// 接口地址 : /lyric
// 调用例子 : /lyric?id=33894312
export function getLyric(url, id){
	return axios({
		url, 
		params: { id }
	})
}

// 说明 : 调用此接口 , 传入音乐 id(支持多个 id, 用 , 隔开), 可获得歌曲详情(dt为歌曲时长)
// 必选参数 : ids: 音乐 id, 如 ids=347230
// 接口地址 : /song/detail
// 调用例子 : /song/detail?ids=347230,/song/detail?ids=347230,347231
export function getSongDetail(url, id){
	return axios({
		url, 
		params:{ ids: id }
	})
}


// 说明 : 调用此接口,可获取所有榜单 接口地址 : /toplist
// 调用例子 : /toplist
export function getTopList(url){
	return axios({ url })
}


// 说明 : 由于网易云接口限制，歌单详情只会提供 10 首歌，通过调用此接口，传入对应的歌单id，即可获得对应的所有歌曲
// 必选参数 : id : 歌单 id
// 可选参数 : limit : 限制获取歌曲的数量，默认值为当前歌单的歌曲数量
// 可选参数 : offset : 默认值为0
// 接口地址 : /playlist/track/all
// 调用例子 : /playlist/track/all?id=24381616&limit=10&offset=1
// 注：关于offset，你可以这样理解，假设你当前的歌单有100首歌
// 你传入limit=10&offset=0等价于limit=10，你会得到第1-10首歌曲
// 你传入limit=10&offset=1，你会得到第2-11首歌曲
// 如果你设置limit=10&offset=2，你就会得到第3-12首歌曲
export function getTopMusic(url, id, limit, offset){
	return axios({
		url, 
		params: {
			id, 
			limit: limit ? limit : null,
			offset: offset ? offset : null
		}
	})
}