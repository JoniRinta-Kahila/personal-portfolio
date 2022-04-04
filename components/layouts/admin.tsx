import type { LayoutProps } from '../../types/pageWithLayouts'
const AdminLayout: LayoutProps = ({ children }) => {
  return <div>Admin: {children}</div>
}
export default AdminLayout