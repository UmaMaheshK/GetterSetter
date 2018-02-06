let weekDays = {
    names: ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'],
    //Getter
    get dayName() {
        if (this.names.length === 0)
            return undefined;
        return this.names[this.names.length - 1];
    },
    //Setter
    set dayName(name) {
        this.names.push(name);
    }
}
console.log(weekDays.dayName);
weekDays.dayName = 'UMA MAHESH';
console.log(weekDays.dayName);