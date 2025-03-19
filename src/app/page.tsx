import GanttChart from "@/components/Gantt";

export default function Home() {
    return (
        <main className="flex flex-col items-center justify-center p-5">
            <h1 className="text-2xl font-bold mb-4">Bienvenue sur votre gestionnaire de projet</h1>
            <GanttChart />
        </main>
    );
}
