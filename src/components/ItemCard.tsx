import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  IconButton,
  Tooltip,
  Typography,
  Avatar,
  Card,
  CardHeader,
  CardContent,
  CardActions,
} from "@mui/material";
import ShareIcon from "@/shared/assets/icons/ShareIcon";
import ReadmoreIcon from "@/shared/assets/icons/ReadmoreIcon";
import { ImageProp } from "@/app/libs/interfaces";

interface Item {
  id: number;
  projectUrl: string;
  name: string;
  description: string;
  location?: string;
  price?: string;
  currency?: string;
  status?: string;
  images: ImageProp[];
  favicon?: ImageProp;
}

interface Props {
  item: Item;
}

const ItemCard: React.FC<Props> = ({ item }) => {
  return (
    <Card key={item.id} className="hover:shadow-2xl cursor-pointer">
      <CardHeader
        avatar={
          item.favicon && (
            <Avatar className="bg-red-600 uppercase">
              <Link href={item.projectUrl}>
                <Image src={item.favicon.src} alt={item.favicon.alt} />
              </Link>
            </Avatar>
          )
        }
        title={<Link href={item.projectUrl}>{item.name.toUpperCase()}</Link>}
        subheader={item.location || ""}
        className="text-red-800 shadow-sm bg-slate-200"
      />
      <CardContent className="grid grid-cols-1">
        <Link href={item.projectUrl}>
          <Image
            src={item.images[0].src}
            alt={item.images[0].alt || "No Image"}
            loading="eager"
            title="Press to explore more information."
            className="pb-3 w-full max-h-[180px] md:max-h-[160px]"
          />
        </Link>
        <Tooltip title={item.description}>
          <Typography
            variant="body2"
            className="text-slate-500 text-wrap line-clamp-3 text-justify text-[14px]"
          >
            {item.description || (
              <Typography variant="body2">Đang cập nhật</Typography>
            )}
          </Typography>
        </Tooltip>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          title="Share"
          aria-label="share"
          onClick={() => alert(`Sharing ${item.name}`)}
        >
          <ShareIcon />
        </IconButton>
        <IconButton
          aria-label="read more"
          title="Read more"
          href={item.projectUrl}
        >
          <ReadmoreIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default ItemCard;
