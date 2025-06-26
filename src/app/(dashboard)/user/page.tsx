import ProtectedRoute from '@/components/ProtectedRoute';

export default function UserPage() {
  return (
    <ProtectedRoute role="user">
      <div className="p-4 text-2xl">Welcome User</div>
    </ProtectedRoute>
  );
}
