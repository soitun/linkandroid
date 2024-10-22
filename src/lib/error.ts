import {t} from "../lang";

export function mapError(msg: any) {
    if (typeof msg !== 'string') {
        msg = msg.toString()
    }
    const map = {
        'FileAlreadyExists': t('文件已存在'),
        'FileNotFound': t('文件未找到'),
        'ProcessTimeout': t('处理超时'),
        'RequestError': t('请求错误'),
        'Could not find any ADB device': t('找不到设备'),
        'DeviceNotConnected': t('设备未连接'),
    }
    for (let key in map) {
        if (msg.includes(key)) {
            return map[key]
        }
    }
    return msg
}