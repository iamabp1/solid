import toast from "react-hot-toast";
import SingleAudit from "@/components/Project/singleAudit";


export default async function SingleAuditPage  ({ post })  {
  



  
    if (!post) return null;

    return (
      <>
            <section className="pb-16 pt-24 md:pb-20 md:pt-28 lg:pb-24 lg:pt-32">
            <div className="container mx-auto">
        <main className="page-wrapper">


            <SingleAudit post={post} />

          
        </main>
        </div>
        </section>
      </>    
    );
};

