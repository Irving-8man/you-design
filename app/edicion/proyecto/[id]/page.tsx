import CardAcces from "@/app/ui/edicion/cardAcces";
import CardTipog from "@/app/ui/edicion/cardTipog";
import CardColors from "@/app/ui/edicion/cardColors";


export default function Page({ params }: { params: { id: string } }) {
  return(
    <div className="px-6 pt-8">
      <h1 className="text-[40px] font-medium">Proyecto {params.id}</h1>
      <div className="flex flex-row nowrap justify-between mt-[60px]">
        <CardAcces porcen={0}/>
        <CardTipog/>
        <CardColors/>
      </div>
    </div>
  );
}