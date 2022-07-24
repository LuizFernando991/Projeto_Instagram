export function CalcDate(date) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const currentDate: any = new Date()
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const postDate: any = new Date(date)
    const time = Math.abs(currentDate - postDate) / 1000
    let timeMessage: string
    if (time > 60 && time <= 60 * 60) {
        timeMessage = `${Math.floor(time / 60)} min`
    } else if (time > 60 * 60 && time <= 60 * 60 * 24) {
        timeMessage = `${Math.floor(time / (60 * 60))} h`
    } else if (time > 60 * 60 * 24) {
        timeMessage = `${Math.floor(time / (60 * 60 * 24))} d`
    } else {
        timeMessage = `${Math.ceil(time)} s`
    }

    return timeMessage
}
