import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name: 'timeDifference'
})
export class TimeDifferencePipe implements PipeTransform {
    transform(value?: string) {
        if (!value) return '';

        const timeNow = new Date("May 31, 2023").getTime();
        const timeActual = new Date(value);
        const diff = Math.abs(timeNow - timeActual.getTime());
        const minutes = Math.floor(diff / 60000); // Milliseconds to minutes

        if (minutes < 60) {
            return `${minutes} min ago`;
        } else if (minutes < 1440) {
            const hours = Math.floor(minutes / 60);
            return `${hours} hour${hours > 1 ? 's' : ''} ago`;
        } else if (minutes < 525600) {
            const days = Math.floor(minutes / 1440);
            return `${days} day${days > 1 ? 's' : ''} ago`;
        } else {
            const years = Math.floor(minutes / 525600);
            return `${years} year${years > 1 ? 's' : ''} ago`;
        }
    }
}