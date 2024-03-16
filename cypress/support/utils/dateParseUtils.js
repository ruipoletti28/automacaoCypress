class DateParseUtils {
    getDayCurrentWeek() {
        const currentDate = new Date()
        const daysWeek = ['Domingo', 'Segunda', 'Terca', 'Quarta', 'Quinta', 'Sexta', 'Sabado']
        const getDayCurrentWeek = daysWeek[currentDate.getDay()]
        return getDayCurrentWeek
    }
    getDayCurrent() {
        const currentDate = new Date()
        const formatDate = currentDate.toLocaleDateString('pt-BR')
        return formatDate
    }
}

export default new DateParseUtils()