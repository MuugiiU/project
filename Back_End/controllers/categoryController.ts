import { Request,Response } from "express";
import Category from "../models/Category";
// get all Categories
export const getAllCategories = async (req:Request, res:Response)=>{
 try{
    const categories = await Category.find();
    if(!categories){
        res.status(201).json ({messege: "Категори хоосон байна."})
    }
    res.status(200).json({message:"Бүх категори олдлоо", categories});

 } catch (error:any){
    res.status(400).json({message:"Категорийн мэдээллийг авахад алдаа гарлаа", error:error.message})
 }
}

export const getCategory= async (req:Request,res:Response) =>{
   try{ 
    const {id} =req.params;
    console.log(req.params)
    const category = await Category.findById({_id:id})
    res.status(200).json({success:true,category})
   } catch(error){
    console.log("Алдааны мэдээлэл",error)
   }
}
export const createCategory = async (req:Request,res:Response)=>{
    
    const {category_title,discription,category_img,category_type}=req.body;

    if(!category_title || !category_type || !category_img || !discription){
        return res.status(400).json({messagea:"Мэдээллийг бүрэн оруулна уу"})
    }
const newCategory = {category_title,discription,category_img,category_type};
    try{
       const category = await Category.create(newCategory);
       console.log(category)
       res.status(201).json({message:"Амжилттай үүслээ",category})
     } catch(error){
        console.log("Алдааны мэдээлэл",error)
     }
}

export const updateCategory= async (req:Request, res:Response)=>{
    const {id} =req.params;
    if(!id) {
        res.status(400).json({message:`${id}-тэй категори олдсонгүй`})
    } try { 
        const category = await Category.findByIdAndUpdate(id,req.body,{new:true})
          
     if(!category) {
        res.status(400).json({message:`${id}-категори олдсонгүй`})
    } res.status(201).json({message:`${id} - тай категорийн мэдээлэл амжилттай солигдлоо`,category})
   } catch(error){
    console.log("Алдааны мэдээлэл",error)
   }
}

export const deleteCategory= async (req:Request,res:Response)=>{
    const {id}= req.params;
    if(!id) {
        res.status(400).json({message:`${id}-тэй категори олдсонгүй`})
    } try{
        const category = await Category.findByIdAndDelete(id);
        res.status(201).json({message:`${id}-тэй категори устгагдлаа`,category})
    } catch (error){
        console.log("Алдааны мэдээлэл",error)
    }
}
  // Sub category get
  export const getSubCategory = async(req:Request,res:Response)=>{
    const {categoryId,subCategoryId}=req.params;
    try{
      const category= await Category.findById(categoryId);
        if(!category){
          return res.status(404).json({message:`${subCategoryId}-Дэд категори олдсонгүй`})
        }
        const subCategory=category.subCategories.find((el)=>el._id?.toString()===subCategoryId)
        if(!subCategory){
          return res.status(404).json({message:`${subCategoryId}-Дэд категори олдсонгүй`})
        }
        res.status(200).json(subCategory)
      } catch(error) {
        console.log("Алдааны мэдээлэл",error)
      }
  }

  //Sub category create
  export const createSubCategory = async (req:Request,res:Response)=>{
    const {categoryId} = req.params;
    const {sub_cat_title, sub_cat_desc, sub_cat_img} =req.body;
    const newSubCategory = {sub_cat_title, sub_cat_desc, sub_cat_img}
    console.log("CATID", categoryId);
     try{
    const category = await Category.findById(categoryId);
    console.log("FindCat",category)

    category?.subCategories.push(newSubCategory);
    console.log("updateFindCat",category)
    await category?.save();

    res.status(201).json({message:"Дэд Амжилттай үүслээ"})
     } catch (error) {
       console.log("Алдааны мэдээлэл",error);
     }
  }
// subCategory update
  export const updateSubCategory = async (req: Request, res: Response) => {
    const { categoryId, subCategoryId } = req.params;
    console.log("SCID",subCategoryId)
  
    try {
      const category = await Category.findById(categoryId);
        if (!category) {
        return res.status(404).json({ message:`${subCategoryId}-Дэд категори олдсонгүй` });
      }
      
      console.log("CC",category.subCategories)
      const findIdx = category.subCategories.findIndex(el=>el._id?.toString() === subCategoryId);
      console.log("FI",findIdx)
      category.subCategories.set(findIdx,{...req.body})
      await category.save();
      res.status(200).json({ message: ' Дэд категори амжилттай шинэчлэгдлээ',category });
    } catch (error) {
      console.log('Алдааны мэдээлэл', error);
    
    }
  };

// subCategory delete
 export const deleteSubCategory =async (req:Request,res:Response) =>{
  const {categoryId,subCategoryId} =req.params;
  console.log("cat",categoryId)
  console.log("sub",subCategoryId)
   try{
     const category=await Category.findById(categoryId);

      if(!category){
        return res.status(404).json({message:`${subCategoryId}--Дэд категори олдсонгүй`})
      }

     category.subCategories.pull({_id: subCategoryId});
     console.log("CC", category )
      await category.save();
    res.status(200).json({message:"Дэд категори устгагдлаа",category})
    
   } catch(error) {
     console.log("Алдааны мэдээлэл", error)
   }
 }
  
