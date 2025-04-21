import * as React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button"; // Assuming you have a Button component
import { Input } from "@/components/ui/input"; // Assuming you have an Input component
import { Label } from "@/components/ui/label"; // Assuming you have a Label component
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"; // Adjust the import path as needed
import { putCaller } from "@/lib/apiCaller";
import useNotification from "@/hooks/useNotification";

export interface UserFormData {
  name: string;
  email: string;
  phone: string;
}

interface UserFormDialogProps {
  onSubmit?: (data: UserFormData) => void;
  buttonText?: string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  formData: UserFormData;
  setFormData: React.Dispatch<React.SetStateAction<UserFormData>>;
}

export function UserFormDialog({
  onSubmit,
  buttonText = "Add User",
  open,
  setOpen,
  formData,
  setFormData,
}: UserFormDialogProps) {
  const { contextHolder, showNotification } = useNotification();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await putCaller({
      url: "users/profile",
      payload: formData,
    });
    if (res.type === "success") {
        showNotification("success","Updated successfully","User Info updated successfully")
      setFormData({ name: "", email: "", phone: "" });
      setOpen(false);
    }else if(res.type === "error"){
        showNotification("error",(res.message.error || "Fail to updated"),"")
    }
  };

  return (
    <>
    {contextHolder}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline">{buttonText}</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] bg-white">
          <DialogHeader>
            <DialogTitle>Update User Information</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4 py-4">
              <div className="flex flex-col gap-2">
                <Label htmlFor="name" className="">
                  Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="col-span-3"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="email" className="">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="col-span-3"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="phone" className="">
                  Phone
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  className="col-span-3"
                  required
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Update</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default UserFormDialog;
