"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { CloseOutlined } from "@mui/icons-material";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Button,
  TextField,
  Tooltip,
  Typography,
  Select,
  SelectChangeEvent,
  MenuItem,
  ListItemText,
} from "@mui/material";
import { CustomerMessage } from "@/app/interfaces";
import { CreateContact } from "@/shared/method/methods";
import { projects } from "@/shared/libs/data";

export default function PopupComponent() {
  const [open, setOpen] = React.useState(false);
  const [project, setProject] = React.useState<string[]>([]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors: errors },
  } = useForm<CustomerMessage>();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    reset();
  };

  const handleChangeProject = (event: SelectChangeEvent<typeof project>) => {
    const {
      target: { value },
    } = event;
    setProject(typeof value === "string" ? value.split(",") : value);
  };

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 30000);
    return () => clearTimeout(timer);
  });

  return (
    <React.Fragment>
      <Button onClick={handleClickOpen} className="fancy hover:opacity-80">
        <span className="top-key"></span>
        <span className="text">Liên hệ với chúng tôi</span>
        <span className="bottom-key-1"></span>
        <span className="bottom-key-2"></span>
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        className="min-w-[400px] lg:min-w-[900px] mx-auto"
      >
        <Tooltip title="Close">
          <CloseOutlined
            onClick={() => setOpen(false)}
            color="error"
            className="text-white absolute top-1 right-1 bg-red-500 rounded hover:opacity-80 cursor-pointer"
          />
        </Tooltip>
        <DialogTitle className="" id="alert-dialog-title">
          <Typography className="title">Liên hệ với chúng tôi</Typography>
          <p className="message">
            Đăng ký nhận thông tin, thanh toán, chính sách giá tốt nhất.
          </p>
        </DialogTitle>
        <DialogContent>
          <form
            className="form"
            onSubmit={() => {
              handleSubmit(CreateContact);
              reset();
            }}
          >
            <p className="text-red-700 -mt-5">(*) Bắt buộc nhập thông tin</p>
            <label>
              <TextField
                {...register("name", {
                  required: "Vui lòng điền thông tin.",
                  minLength: {
                    value: 8,
                    message: "Điền it nhất 8 ký tự.",
                  },
                  maxLength: {
                    value: 50,
                    message: "Điền tối đa 50 ký tự.",
                  },
                })}
                placeholder="(*) Họ và tên khách hàng | Doanh nghiệp"
                type="text"
                fullWidth
              />
            </label>
            <span className="text-red-700">{errors.name?.message}</span>

            <label>
              <TextField
                {...register("email", {
                  required: "Vui lòng điền thông tin.",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Email sai định dạng.",
                  },
                })}
                placeholder="(*) Email"
                type="email"
                fullWidth
              />
            </label>
            <span className="text-red-700">{errors.email?.message}</span>

            <label>
              <TextField
                {...register("phone", {
                  required: "Vui lòng điền thông tin.",
                  pattern: {
                    value: /^\d{10}$/,
                    message: "Vui lòng nhập đủ 10 số.",
                  },
                })}
                fullWidth
                placeholder="(*) Số điện thoại"
              />
            </label>
            <span className="text-red-700">{errors.phone?.message}</span>

            <label>
              <Select
                {...register("projects")}
                labelId="multiple-project-label"
                id="multiple-project"
                multiple
                fullWidth
                displayEmpty
                value={project}
                defaultValue={[""]}
                onChange={handleChangeProject}
                renderValue={(selected) => {
                  if (selected.length === 0) {
                    return (
                      <b className="text-gray-400 font-extralight">
                        Vui lòng bấm chọn
                      </b>
                    );
                  }

                  return selected.join(", ");
                }}
              >
                <MenuItem disabled>
                  <em>Quý khách hàng đang quan tâm dự án ?</em>
                </MenuItem>
                {projects.map((item) => (
                  <MenuItem key={item.id} value={item.name.toUpperCase()}>
                    <ListItemText primary={item.name.toUpperCase()} />
                  </MenuItem>
                ))}
              </Select>
            </label>

            <label>
              <TextField
                {...register("message")}
                className="mt-3"
                rows={5}
                fullWidth
                placeholder="Chúng tôi có thể giúp gì cho bạn ?"
              />
            </label>

            <button className="submit w-full my-5 uppercase">đăng ký</button>
          </form>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
