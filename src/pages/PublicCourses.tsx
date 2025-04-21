import Courses from "@/components/Admin/Courses";
import LeftMenu from "@/components/common/LeftMenu";

function PublicCourses() {
  return (
    <div>
      <LeftMenu>
        <Courses creator="User" />
      </LeftMenu>
    </div>
  );
}

export default PublicCourses;
