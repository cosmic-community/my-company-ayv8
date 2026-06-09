import { getTeamMembers } from '@/lib/cosmic'
import TeamCard from '@/components/TeamCard'

export const metadata = {
  title: 'Team — My Company',
  description: 'Meet the experts behind My Company.',
}

export default async function TeamPage() {
  const team = await getTeamMembers()

  return (
    <div className="container-wide py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-slate-900">Meet the Team</h1>
        <p className="mt-4 max-w-2xl mx-auto text-slate-600">
          Talented professionals dedicated to delivering exceptional results.
        </p>
      </div>

      {team.length === 0 ? (
        <p className="text-center text-slate-500">No team members available yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      )}
    </div>
  )
}