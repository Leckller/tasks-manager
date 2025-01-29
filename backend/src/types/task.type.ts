export default interface taskType {
    id: number,
    titulo: string,
    completada: boolean,
    descricao: string,
    subTarefas: taskType[];
}