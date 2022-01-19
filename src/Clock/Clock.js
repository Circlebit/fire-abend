import ReactEcharts from "echarts-for-react";

const Clock = () => {

    let myData = {
        currentHour: 5.5,
        maxHours: 8,
        currentDayInWeek: 3,
        maxDaysInWeek: 5,
        currentDayInMonth: 5,
        maxDaysInMonth: 21
    }

    const percentDoneToday = (data) => {
        return data.currentHour / data.maxHours * 100;
    }

    const percentToDoToday = (data) => {
        return (data.maxHours - data.currentHour) / data.maxHours * 100;
    }

    const percentDoneThisWeek = (data) => {
        return data.currentDayInWeek / data.maxDaysInWeek * 100;
    }

    const percentToDoThisWeek = (data) => {
        return (data.maxDaysInWeek - data.currentDayInWeek) / data.maxDaysInWeek * 100;
    }

    const percentDoneThisMonth = (data) => {
        return data.currentDayInMonth / data.maxDaysInMonth * 100;
    }

    const percentToDoThisMonth = (data) => {
        return (data.maxDaysInMonth - data.currentDayInMonth) / data.maxDaysInMonth * 100;
    }

    return (
        <ReactEcharts
            option={{
                color: ['#91cc75', 'lightgrey'],
                angleAxis: {
                    max: 100
                },
                radiusAxis: {
                    type: 'category',
                    data: ['Month', 'Week', 'Day'],
                    z: 10
                },
                polar: {
                    center: ['50%', '50%']
                },
                series: [{
                    type: 'bar',
                    data: [
                        percentDoneThisMonth(myData),
                        percentDoneThisWeek(myData),
                        percentDoneToday(myData)],
                    coordinateSystem: 'polar',
                    name: 'Done',
                    stack: 'a'
                }, {
                    type: 'bar',
                    data: [
                        percentToDoThisMonth(myData),
                        percentToDoThisWeek(myData),
                        percentToDoToday(myData)],
                    coordinateSystem: 'polar',
                    name: 'ToDo',
                    stack: 'a'
                }],
                legend: {
                    show: false,
                    data: ['Done', 'ToDo']
                }
            }}
        />

    );
}

export default Clock;