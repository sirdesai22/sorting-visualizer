const PRIMARY_COLOR = "turquoise";
const SECONDARY_COLOR = "red";

export default function playBubbleSortAnimations(animations: any, speed: number) {
    for (let i = 0; i < animations.length; i++) {
        const arrayBars = document.getElementsByClassName(
            "array-bar"
        ) as HTMLCollectionOf<HTMLElement>;

        const isColorChange = i % 4 < 2;
        if (isColorChange) {
            const [barOneIdx, barTwoIdx] = animations[i];

            // Check if barOneIdx and barTwoIdx exist in arrayBars
            if (arrayBars[barOneIdx] && arrayBars[barTwoIdx]) {
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 4 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;

                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * speed);
            }
        } else {
            setTimeout(() => {
                const [barOneIdx, newHeight] = animations[i];

                // Check if barOneIdx exists in arrayBars
                if (arrayBars[barOneIdx]) {
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight}px`;
                }
            }, i * speed);
        }
    }
};