/*
* Position prop can be one of
* "left-coner" | "left-top" | "left-bottom" | "center" | "center-top"|
* "center-bottom" | "center-right" | "right-top" | "right-bottom"
*/

type HorizontalPosition = "left" | "right" | "center"
type VerticalPosition = "top" | "bottom" | "center"

type ToastProps = {
    position: Exclude<`${HorizontalPosition}-${VerticalPosition}`,
    'center-center'> | 'center '
}
export const Toast = ({ position }: ToastProps) => {
    return <div>Toast Notification Position - {position}</div>
}