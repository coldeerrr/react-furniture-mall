// 监听图片是否加载完成的工具函数

export function loadImageAsync (url) {
    return new Promise((resolve, reject) => {
        const image = new Image();
        image.src = url;

        image.onload = function () {
            // resolve({
            //     // 标识是否成功加载
            //     // loading: true,
            //     // image
            // });
            resolve(url)
        }
        image.onerror = function () {
            // reject({
            //     // loading: false,
            //     error: new Error("Could noe load image at" + url)
            // });
            reject(new Error("Could noe load image at" + url))
        }
    })
}