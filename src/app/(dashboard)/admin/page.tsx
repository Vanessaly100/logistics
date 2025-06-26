import ProtectedRoute from '@/components/ProtectedRoute';

export default function AdminPage() {
  return (
    <ProtectedRoute role="admin">
      <div className="p-4 text-2xl">Welcome Admin</div>
    </ProtectedRoute>
  );
}
