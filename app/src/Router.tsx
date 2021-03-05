import React from 'react'
import { Router, Stack, Scene } from 'react-native-router-flux'
import Top from './pages/Top'
import AMusic from './pages/AMusic/index'

interface IScene {
    initial?: boolean
    key: string
    title?: string
    component: React.FC
    hideNavBar?: boolean
}

const scenesParams: IScene[] = [
    {
        initial: true,
        key: 'Top',
        title: 'Top',
        component: Top,
        hideNavBar: true
    },
    {
        key: 'AMusic',
        title: 'AMusic',
        component: AMusic,
        hideNavBar: true
    },
]

const Scenes = scenesParams.map((params) => (<Scene {...params} />))
const AppRouter: React.FC = () => {
    return (
        <Router>
            <Stack key="root">
                {Scenes}
            </Stack>
        </Router>
    )
}

export default AppRouter
