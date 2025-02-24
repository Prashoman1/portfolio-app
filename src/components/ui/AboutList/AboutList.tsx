"use client";
import { useState } from "react";
import { Input } from "../../shared/Input";
import { Textarea } from "../../shared/TextArea";

const AboutList = () => {
  const [formData, setFormData] = useState({
    image: "",
    title: "",
    subtitle: "",
    description: "",
    socials: [{ name: "", url: "" }],
  });

  return (
    <>
      <div className="px-5 py-10">
        <h1>About List</h1>
        <form
          // onSubmit={handleSubmit}
          className="space-y-4"
        >
          <Input
            className=""
            name="title"
            onChange={(e: any) =>
              setFormData({ ...formData, title: e.target.value })
            }
            placeholder="Title"
            value={formData.title}
          />
          <Input
            className=""
            name="subtitle"
            onChange={(e: any) =>
              setFormData({ ...formData, subtitle: e.target.value })
            }
            placeholder="Subtitle"
            value={formData.subtitle}
          />
          <Input
            className=""
            name="image"
            onChange={(e: any) =>
              setFormData({ ...formData, title: e.target.value })
            }
            placeholder="Image"
            type="file"
            value={formData.title}
          />
          <Textarea
            name="description"
            className=""
            onChange={(e: any) =>
              setFormData({ ...formData, description: e.target.value })
            }
            placeholder="Description"
            value={formData.description}

            />
            

          <div className="space-y-2">
            <label htmlFor="socialLinks" className="block text-sm font-medium">
              Social Links
            </label>
            {formData.socials.map((social, index) => (
              <div key={index} className="flex space-x-2">
                <Input
                  id={`socialName${index}`}
                  className=""
                  name="name"
                  onChange={(e: any) => {
                    setFormData({
                      ...formData,
                      socials: formData.socials.map((s, i) =>
                        i === index ? { ...s, name: e.target.value } : s
                      ),
                    });
                  }}
                  placeholder="Platform"
                  value={social.name}
                />
              </div>
            ))}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default AboutList;
