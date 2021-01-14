const RefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const path = require('path'); //노드에서 경로 쉽게 조작하도록
const { webpack } = require('webpack');
module.exports={
    name: 'wordRelay-setting',
    mode : 'development', //실서비스 : production
    devtool : 'eval',
    resolve:{ //확장자 
        extensions : ['.js', '.jsx']
    },
    
    entry :{
        app : './client' //client가 WordRelay.jsx를 불러오므로 굳이 여기에 안 적어줘도 웹팩이 알아서 해준다.
    }, //입력

    module : {
        rules: [{
            test: /\.jsx?/, 
            loader : 'babel-loader',
            options : {
                presets: [
                    ['@babel/preset-env', {
                        targets:{
                         browsers:['>5% in KR','last 2 chrome versions'],
                      }
                    }], 
                 '@babel/preset-react'
                ],
                plugins: ['@babel/plugin-proposal-class-properties', 'react-refresh/babel']
            },
        }],
    },
    plugins: [
        new RefreshWebpackPlugin()
    ],
    output : {
        path: path.join(__dirname, 'dist'), //경로를 알아서 합쳐준다. 현재 폴더 안에 dist를 만들어준다.
        filename: 'app.js',
        publicPath: '/dist/',
    }, //출력
    devServer : {
        publicPath: '/dist/',
        hot: true,
    },
}
//웹팩으로 쪼개진 js, jsx파일 합쳐줌